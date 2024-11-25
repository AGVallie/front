import useAlert from "../../hooks/useAlert";
import useOptionSelector from "../../hooks/useOptionSelector";
import OptionType from "../../types/OptionType";
import { HStack, Spacer } from "../common/Stack";
import { RxChevronRight } from "react-icons/rx";

interface DetailItemProps<T> {
  title: string;
  state: T;
  onSetState?: (newState: T) => void;
  options?: OptionType<T>[];
  editableString?: boolean;
}

const detailItemClassName =
  "justify-between text-sm cursor-pointer p-1 items-center";

function DetailItem<T>({
  title,
  state,
  onSetState,
  options = [],
  editableString = false,
}: DetailItemProps<T>) {
  const { optionSelector, toggleShowOptionSelector } = useOptionSelector(
    options,
    onSetState
  );
  const { triggerAlert } = useAlert();

  const handleClick =
    onSetState &&
    (editableString
      ? () =>
          triggerAlert({
            cancelLabel: "취소",
            confirmLabel: "수정",
            title: `${title} 변경:`,
            placeholder: state as string,
            onConfirmWithInput(input: string) {
              (onSetState as (input: string) => void)(input);
            },
          })
      : toggleShowOptionSelector);

  const curState: string =
    options.filter((option) => option.value == state)[0]?.label ??
    (state as string);

  return (
    <>
      {/* 상세 항목 표시 */}
      <HStack className={detailItemClassName} onClick={handleClick}>
        {/* 제목 */}
        <span className="font-bold"> {title}</span>
        <Spacer />
        {/* 현재 상태 */}
        <span className="text-gray-500">{curState}</span>
        {/* 수정 가능하면 화살표 띄우기 */}
        {onSetState ? <RxChevronRight color="gray" /> : <div className="w-3" />}
      </HStack>
      {/* 옵션셀렉터  */}
      {options && optionSelector}
    </>
  );
}

export default DetailItem;
