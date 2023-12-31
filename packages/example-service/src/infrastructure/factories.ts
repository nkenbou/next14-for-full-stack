import {
  // eslint-disable-next-line import-access/jsdoc -- 自動生成ファイルのため
  definePostFactory,
  // eslint-disable-next-line import-access/jsdoc -- 自動生成ファイルのため
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
