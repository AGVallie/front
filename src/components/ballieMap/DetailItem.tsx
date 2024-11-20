import useOptionSelector from "../../hooks/useOptionSelector";
import { HStack } from "../common/Stack";

interface DetailItemProps<T> {
  title: string;
  state: T;
  onSetState: (newState: T) => void;
  options?: { label?: string; value: T; color?: string }[];
}

function DetailItem<T>({
  title,
  state,
  onSetState,
  options = [],
}: DetailItemProps<T>) {
  const { optionSelector, toggleShowOptionSelector } = useOptionSelector(
    options,
    onSetState
  );
  return (
    <>
      <HStack className="justify-between" onClick={toggleShowOptionSelector}>
        <span className="font-bold"> {title}</span>
        <span className="text-gray-500">
          {options.filter((option) => option.value == state)[0].label ??
            (state as string)}
        </span>
      </HStack>
      {optionSelector}
    </>
  );
}

export default DetailItem;
