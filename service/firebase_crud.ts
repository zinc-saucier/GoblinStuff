import { MagicItem } from "@/app/components/item";
import MagicalItems from "@/app/dnd-5e/magical-item";
import { db } from "@/util/firebase";
import {
  collection,
  doc,
  addDoc,
  getDoc,
  setDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

interface user {
  user_name: string,
  user_email: string,
  User_ID: string
}

//create a new cart document for new users
export const createCart = async (User_ID: string) => {
  try {
    const docRef = await setDoc(doc(db, "Carts", User_ID), {
      User_ID: User_ID,
      createdAt: serverTimestamp(),
    });
    return { success: true};
  } catch (error) {
    console.error("Error adding user cart: ", error);
    return { success: false, error };
  }
};

//create new user document
export const createUser = async (user: user) => {
  try {
    const docRef = await addDoc(collection(db, "Users"), {
      User_ID: `${user.User_ID}`,
      user_email: `${user.user_email}`,
      user_name: `${user.user_name}`,
      createdAt: serverTimestamp(),
    });
    createCart(`${user.User_ID}`)
    return { success: true, id: docRef.id};
  } catch (error) {
    console.error("Error adding user record: ", error);
    return { success: false, error };
  }
};

//add items to user cart
export const addToCart = async (
  User_ID: string,
  data: object,
) => {
  try {
    const docRef = doc(db, "Carts", User_ID);
    await updateDoc(docRef, {
      items: arrayUnion(data),
      updatedAt: serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating document: ", error);
    return { success: false, error };
  }
};

//remove selected item from user cart
export const removeFromCart = async (
  User_ID: string,
  data: object,
) => {
  try {
    const docRef = doc(db, "Carts", User_ID);
    await updateDoc(docRef, {
      items: arrayRemove(data),
      updatedAt: serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating document: ", error);
    return { success: false, error };
  }
};

//retrieve a user's cart
export const getCart = async (
  User_ID: string,
) => {
  try {
    const docRef = doc(db, "Carts", User_ID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const items:MagicItem[] = docSnap.data().items
      
      return items;
    }
    return null;
  } catch (error) {
    console.error("Error reading document: ", error);
    throw error;
  }
};



/**
 * DELETE: Removes a document from the collection
 */
export const clearCart = async (User_ID:string) => {
  try {
    const docRef = doc(db, "Carts", User_ID);
    await deleteDoc(docRef);
    createCart(User_ID)
    return { success: true };
  } catch (error) {
    console.error("Error deleting document: ", error);
    return { success: false, error };
  }
};
