import { SearchItemModel } from './search-item.model';

export interface SearchResponseModel {
  kind: string;
  etag: string;
  pageInfo: PageInfoModel;
  items: SearchItemModel[];
}

interface PageInfoModel {
  totalResults: number;
  resultsPerPage: number;
}
