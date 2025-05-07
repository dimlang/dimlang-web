export interface WaitlistSubscriptionRequest {
  fullName: string;
  email: string;
  contentTypes?: string[];
  preferredPlatforms?: string[];
}