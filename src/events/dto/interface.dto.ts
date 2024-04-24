export class DataJoinRoom {}

export class DataToken {
  id: string;
  username: string;
  email: string;
  status: string;
}

export class DataSendMessage {
  group: string;
  files: string[];
  content: string;
  typeMessage: string;
  timeSend: Date;
}

export interface UpdateStatusGameDto {
  gameDiceId: number;
  transaction: number;
  status: number;
  totalRed?: number;
}

export interface UpdatePointDto {
  userId: number;
  type: number;
  points: number;
}

export interface DataSendUpdatePointDto {
  data: UpdatePointDto[];
}
