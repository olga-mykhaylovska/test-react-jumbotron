export enum AppMode {
    NoData,
    Single,
    Multi,
}

export type ImageInfo = {
    imageUrl: string
    description: string
}

export const Images: ImageInfo[] = ['First', 'Second', 'Third', 'Fourth', 'Fifth'].map(
    (description, idx) => ({
        imageUrl: `https://picsum.photos/seed/${idx + 1}00/300`,
        description: `${description} image`,
    })
)
