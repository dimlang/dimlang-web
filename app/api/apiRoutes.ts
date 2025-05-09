/**
 * The API routes endpoints
 */
export class ApiRoutes {
  /**
   * The dev base url for the application
   */
  //   static BASE_URL_DEV: string = "http://localhost:3050/";

  /**
   * The test base url for the application
   */
  static BASE_URL_TEST: string = "https://dimlang-alb-dev-664463360.us-east-1.elb.amazonaws.com/api/v1";

  /**
   * The live base url for the application
   */
  static BASE_URL_LIVE: string = "https://dimlang-alb-dev-664463360.us-east-1.elb.amazonaws.com/api/v1";

  /**
   * The base url being used for the application
   */
  static BASE_URL: string = ApiRoutes.BASE_URL_TEST;

  /**
   * The route to Waitlist Subscription endpoint
   */
  static WaitlistSubscription: string = "/waitlist";
}
