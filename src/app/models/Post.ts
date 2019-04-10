export class Post {
    title: string;
    content: string;
    created_at: number;
    loveIts: number;

    constructor() {
        //Pour pouvoir enregistrer sur firebase, new Date() ne marche pas
        this.created_at = Date.now();
        this.loveIts = 0;
    }
}
