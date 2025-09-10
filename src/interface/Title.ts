import { PaginatedTitleData } from './pagination';

export interface Title {
  titleId: string;
  titleName: string;
  titleDetails: string;
  titleCode: string;
  isTitleActive: boolean;
  isTitleDeleted: boolean;
  titleCreatedAt: string;
  titleCreatedBy: string;
  titleUpdatedAt: string;
  titleUpdatedBy: string;
}

export interface TitleResponse {
  data: {
    success: boolean;
    message: string;
    data: PaginatedTitleData | Title[];
  };
}
export interface EditTitleAPiResponse {
  success: boolean;
  message: string;
  data: Title;
}
