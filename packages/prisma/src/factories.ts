import {
  definePostFactory,
  defineUserFactory,
} from "../__generated__/fabbrica";

export const UserFactory = defineUserFactory();

export const PostFactory = definePostFactory({
  defaultData: {
    author: UserFactory,
  },
});
