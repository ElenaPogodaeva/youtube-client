import { VideoItemModel } from './video-item.model';

export interface VideoResponseModel {
  kind: string;
  etag: string;
  pageInfo: PageInfoModel;
  items: VideoItemModel[];
}

interface PageInfoModel {
  totalResults: number;
  resultsPerPage: number;
}
