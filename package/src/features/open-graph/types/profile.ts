import type { OpenGraphBase } from './base';

/**
 * Open Graph Metadata for Profiles (People)
 */
export type OpenGraphProfile = OpenGraphBase & {
  /**
   * The type of object.
   *
   * @example `<meta property="og:type" content="profile">`
   */
  type: 'profile';

  /**
   * The person’s first name.
   *
   * @example `<meta property="profile:first_name" content="John">`
   */
  firstName?: string;

  /**
   * The person’s last name.
   *
   * @example `<meta property="profile:last_name" content="Doe">`
   */
  lastName?: string;

  /**
   * A short unique string to identify them.
   *
   * @example `<meta property="profile:username" content="johndoe">`
   */
  username?: string;

  /**
   * The person’s gender.
   *
   * @example `<meta property="profile:gender" content="male">`
   */
  gender?: 'male' | 'female';
};
