export type Hotels = {
  id: string,
  title: string,
  address: string,
  image: string,
  rating: number,
  ratingType: string,
  promotion: string,
  name?: string,
  roomName?: string,
  price: number,
  savings: number,
  freeCancellation: true,
};

export type HotelsState = {
  isLoading: boolean,
  all: Array<Hotels>,
  sort: 'ASC' | 'DESC',
  error: string,
}
