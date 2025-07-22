import { create } from "zustand";

const useCart = create((set, get) => ({
  cartItems: [],
  loading: false,
  itemsLoading: {},
  isAdded: false,
  giftWrapped: false,
  freeShippingThreshold: 1000,
  totalValue: 0,
  freeShipping: false,

  calculateTotal: () => {
    const total = get().cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    set({
      totalValue: total,
      freeShipping: total >= get().freeShippingThreshold,
    });
  },

  giftWrap: {
    id: "gift-wrap",
    thumbnail: "/images/gift-wrap.webp",
    title: "Gift wrapping",
    price: "10.00",
    quantity: 1,
    gift: true,
  },

  toggleGiftWrap: () => {
    const newWrappedState = !get().giftWrapped;
    set({ giftWrapped: newWrappedState });
    if (newWrappedState) {
      get().addGiftWrap();
    } else {
      get().removeGiftWrap();
    }
  },

  addGiftWrap: () => {
    set((state) => {
      const existingGift = state.cartItems.some(
        (item) => item.id === "gift-wrap"
      );
      if (!existingGift) {
        return { cartItems: [...state.cartItems, state.giftWrap] };
      }
    });
  },

  removeGiftWrap: () => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== "gift-wrap"),
    }));
  },

  addToCart: (item) => {
    set((state) => ({
      loading: true,
      itemsLoading: { ...state.itemsLoading, [item.id]: true },
    })); // Set isAdding to true immediately

    setTimeout(() => {
      set((state) => {
        const currentItem = state.cartItems.findIndex((i) => i.id === item.id);
        let newCartItems;

        if (currentItem !== -1) {
          // If item exists, increase the quantity
          newCartItems = state.cartItems.map((cartItem, index) => {
            if (index === currentItem) {
              return { ...cartItem, quantity: cartItem.quantity + 1 };
            }
            return cartItem;
          });
        } else {
          // Item does not exist, add new item with quantity initialized to 1
          newCartItems = [...state.cartItems, { ...item, quantity: 1 }];
        }

        return {
          cartItems: newCartItems,
          loading: false, // Reset isAdding after the operation
          isAdded: true, // Set isAdded to indicate completion of addition
          itemsLoading: { ...state.itemsLoading, [item.id]: false },
        };
      });
      get().calculateTotal(); // Recalculate total value
    }, 1000); // Delay to simulate asynchronous operation like a network request
  },

  removeFromCart: (id) => {
    set((state) => ({
      itemsLoading: { ...state.itemsLoading, [id]: true },
    }));

    setTimeout(() => {
      set((state) => {
        const index = state.cartItems.findIndex((item) => item.id === id);
        let newCartItems;

        if (index !== -1 && state.cartItems[index].quantity > 1) {
          newCartItems = state.cartItems.map((item, idx) => {
            if (idx === index) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          });
        } else {
          newCartItems = state.cartItems.filter((item, idx) => idx !== index);
        }

        return {
          cartItems: newCartItems,
          itemsLoading: { ...state.itemsLoading, [id]: false },
        };
      });
      get().calculateTotal();
    }, 1000);
  },

  removeAllFromCart: (id) => {
    set((state) => ({
      itemsLoading: { ...state.itemsLoading, [id]: true },
    }));

    setTimeout(() => {
      set((state) => ({
        cartItems: state.cartItems.filter((item) => item.id !== id),
        itemsLoading: { ...state.itemsLoading, [id]: false },
      }));
    }, 1000);
  },

  clearCart: () => {
    set({
      cartItems: [],
      totalValue: 0,
      giftWrapped: false,
      freeShipping: false,
      loading: false,
    });
  },

  resetIsAdded: () => set({ isAdded: false }),
}));

export default useCart;
