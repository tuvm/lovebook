import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from '@firebase/firestore';
import { Post } from '../../models';
import { firestore } from '../config';
import { v4 as uuid4 } from 'uuid';

const db = collection(firestore, 'posts');

class PostService {
  getAll() {
    return getDocs(db);
  }

  create(post: Post) {
    const _uid = uuid4();
    const timestamp = new Date().getTime();
    post.createdAt = post.updatedAt = timestamp;
    const _post = doc(db, _uid);
    return setDoc(_post, post);
  }

  get(uid: string) {
    const _post = doc(db, uid);
    return getDoc(_post);
  }

  update(post: Post) {
    post.updatedAt = new Date().getTime();
    const _post = doc(db, post.uid);
    return setDoc(_post, post);
  }

  delete(uid: string) {
    const _post = doc(db, uid);
    return deleteDoc(_post);
  }
}

export default new PostService();
