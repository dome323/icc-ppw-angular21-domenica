import { Injectable, inject } from '@angular/core';

import {
  Firestore,
  doc,
  setDoc,
  deleteDoc,
  collection,
  query,
  where,
  collectionData,
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

// Modelo del documento en Firestore.
export interface Favorite {
  userId: string;
  characterId: number;
  addedAt: Date;
}

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {

  private firestore = inject(Firestore);

  // Guardar favorito
  addFavorite(userId: string, characterId: number): Promise<void> {
    const ref = doc(this.firestore, `favorites/${userId}-${characterId}`);

    return setDoc(ref, {
      userId,
      characterId,
      addedAt: new Date(),
    });
  }

  // Eliminar favorito
  removeFavorite(userId: string, characterId: number): Promise<void> {
    const ref = doc(this.firestore, `favorites/${userId}-${characterId}`);
    return deleteDoc(ref);
  }

  // Obtener favoritos del usuario
  getFavoritesByUser(userId: string): Observable<Favorite[]> {
    const favRef = collection(this.firestore, 'favorites');
    const q = query(favRef, where('userId', '==', userId));

    return collectionData(q, { idField: 'id' }) as Observable<Favorite[]>;
  }
}