export interface SearchItemModel {
  kind: string;
  etag: string;
  id: SearchItemIdModel;
  snippet: SnippetModel;
}

interface SearchItemIdModel {
  kind: string;
  videoId: string;
}

interface SnippetModel {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: ThumbnailsModel;
  channelTitle: string;
  liveBroadcastContent: string;
}

interface ThumbnailsModel {
  default: ThumbnailModel;
  medium: ThumbnailModel;
  high: ThumbnailModel;
}

interface ThumbnailModel {
  url: string;
  width: number;
  height: number;
}
