enum PetCategory {
    CAT,
    DOG,
    RABBIT,
    STINGRAY
}

export enum PetStatus {
    AVAILABLE,
    CHECKEDOUT
}

export interface Pet {
    id: string;
    name: string;
    weight: number;
    category: PetCategory;
    status: PetStatus;
    dueDate?: Date;
}
