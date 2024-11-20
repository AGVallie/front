import useOptionSelector from "../../hooks/useOptionSelector";
import OptionType from "../../types/OptionType";
import { HStack, Spacer } from "../common/Stack";
import { RxChevronRight } from "react-icons/rx";

interface DetailItemProps<T> {
  title: string;
  state: T;
  onSetState?: (newState: T) => void;
  options?: OptionType<T>[];
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
      <HStack
        className="justify-between text-sm cursor-pointer p-1 items-center"
        onClick={onSetState && toggleShowOptionSelector}
      >
        <span className="font-bold"> {title}</span>
        <Spacer />
        {onSetState ? (
          <span className="text-gray-500">
            {options.filter((option) => option.value == state)[0].label ??
              (state as string)}
          </span>
        ) : (
          <span className="text-gray-500 pr-3">{state as string}</span>
        )}

        {onSetState && <RxChevronRight color="gray" />}
      </HStack>
      {optionSelector}
    </>
  );
}

export default DetailItem;
