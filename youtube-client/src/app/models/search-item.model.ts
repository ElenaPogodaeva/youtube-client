export interface SearchItemModel {
  kind: string;
  etag: string;
  id: string;
  snippet: SnippetModel;
  statistics: StatisticsModel;
}

interface SnippetModel {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: ThumbnailsModel;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage?: string;
  localized: LocalizedModel;
  defaultAudioLanguage: string;
}

interface StatisticsModel {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

interface LocalizedModel {
  title: string;
  description: string;
}

interface ThumbnailsModel {
  default: ThumbnailModel;
  medium: ThumbnailModel;
  high: ThumbnailModel;
  standard: ThumbnailModel;
  maxres: ThumbnailModel;
}

interface ThumbnailModel {
  url: string;
  width: number;
  height: number;
}
