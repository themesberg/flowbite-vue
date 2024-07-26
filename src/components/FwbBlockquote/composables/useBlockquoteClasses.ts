import type { BlockquoteSize, BlockquoteAlign, BlockquoteType } from "../types";
import { computed, ref, useAttrs } from "vue";
import { twMerge } from "tailwind-merge";

const defaultBlockquoteClasses = "font-semibold italic text-gray-900 dark:text-white";
const blockquoteAlignClasses: Record<BlockquoteAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};
const blockquoteSizeClasses: Record<BlockquoteSize, string> = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
};

export type UseBlockquoteClassesProps = {
  size: BlockquoteSize;
  align: BlockquoteAlign;
  type: BlockquoteType;
};

export function useBlockquoteClasses(
  props: UseBlockquoteClassesProps
) {
  const attrs = useAttrs();
  const blockquoteClasses = computed(() => {
    return twMerge(
      blockquoteSizeClasses[props.size],
      blockquoteAlignClasses[props.align],
      props.type === "solid" ? "bg-gray-100 dark:bg-gray-800 border-l-4 border-gray-300 p-4 dark:border-gray-500" : "",
      defaultBlockquoteClasses,
      attrs.class as string
    );
  });

  return {
    blockquoteClasses,
  };
}