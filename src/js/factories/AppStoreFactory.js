
var AppStoreFactory = function(){

  var PRODUCTS = require('../assets/products.json');
  var CART = [{
      item: PRODUCTS[0],
      qty: 1
  }];

  function removeItem(id){
    CART.map(function(x, i){
      if(x.item._id === id){
        CART.splice(i, 1);
      }
    });
  }

  function addItem(item, qty){
    CART.push({
      item: item,
      qty: qty
    })
  }

  function matchCartItemID(id) {
    var itemID = '';
    CART.map(function(x) {
      if (x.item._id == id) itemID = x.item._id;
    });
    return itemID;
  }

  function editCartItemQty(action, qty, id){
    CART.map(function(x){
      if(x.item._id === id){
        switch(action){
          case 'ADD_MORE':
            x.qty = +x.qty + +qty;
            break;
          case 'INCREASE':
            x.qty++;
            break;
          case 'DECREASE':
            x.qty--;
            if(x.qty < 1)
              removeItem(x.item._id);
            break;
        }
      }
    });
  }
  
  return{
    getAllProducts: function(){
      return PRODUCTS;
    },
    getCart: function(){
      return CART;
    },
    addToCart: function(qty, item){
      if(!qty) qty = 1;
      var productItemID = item._id;
      var cartItemID = matchCartItemID(productItemID);
      if(cartItemID === productItemID){
        editCartItemQty('ADD_MORE', qty, productItemID);
      } else {
        addItem(item, qty);
      }
    },
    removeFromCart: function(id){
      removeItem(id)
    },
    increaseQty: function(id){
      editCartItemQty('INCREASE', null, id);
    },
    decreaseQty: function(id){
      editCartItemQty('DECREASE', null, id);
    },
    cartTotal: function(){
      var total = 0;
      CART.map(function(x){
        total += x.qty * x.item.price;
      });
      return total
    },
    cartQty: function(){
      var qty = 0;
      CART.map(function(x){
        qty = +qty + +x.qty;
      });
      return qty
    }
  }
};

module.exports = AppStoreFactory;