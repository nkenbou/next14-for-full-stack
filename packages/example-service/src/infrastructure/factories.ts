import {
  // eslint-disable-next-line import-access/jsdoc
  definePostFactory,
  // eslint-disable-next-line import-access/jsdoc
  defineUserFactory,
} from "../../__generated__/fabbrica";

/**
 * @public
 */
export const UserFactory = defineUserFactory();

/**
 * @public
 */
export const PostFactory = definePostFactory({
  defaultData: {
    author: UserFactory,
  },
});
