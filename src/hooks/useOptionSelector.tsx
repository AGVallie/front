import Modal from "../components/common/modals/Modal";
import { VStack } from "../components/common/Stack";
import uuid from "../utils/uuid";
import useToggle from "./useToggle";

function useOptionSelector<T>(
  options: { label?: string; value: T; color?: string }[],
  onSelect?: (newState: T) => void
) {
  const [showOptionSelector, toggleShowOptionSelector] = useToggle(false);
  if (!onSelect)
    return { optionSelector: null, toggleShowOptionSelector: () => {} };
  const selectOption = (newState: T) => {
    onSelect(newState);
    toggleShowOptionSelector();
  };
  const optionSelector = (
    <Modal
      show={showOptionSelector}
      onClose={toggleShowOptionSelector}
      className="bottom-8 !bg-transparent delay-0 w-full !p-3"
      xButton={false}
    >
      {/* 옵션 리스트 */}
      <VStack className="backdrop-blur bg-white/70 !p-0 !rounded-lg gap-0 mb-2">
        {options.map((option, idx) => (
          <>
            <button
              className={`text-center py-2.5 ${option.color ?? "text-blue-500"}`}
              key={uuid()}
              onClick={() => selectOption(option.value)}
            >
              {option.label ?? (option.value as string)}
            </button>
            {/* 구분선 */}
            {idx < options.length - 1 && (
              <div className="w-full border border-gray-400 border-t-0" />
            )}
          </>
        ))}
      </VStack>
      {/* 취소버튼 */}
      <button
        className="backdrop-blur bg-white w-full !rounded-lg gap-0 text-center py-2.5 text-blue-500 font-bold"
        onClick={toggleShowOptionSelector}
      >
        취소
      </button>
    </Modal>
  );

  return { optionSelector, toggleShowOptionSelector };
}

export default useOptionSelector;
