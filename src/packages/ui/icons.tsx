import {
  Search,
  X,
  Check,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  CircleX,
  Dot,
  Ellipsis,
  EllipsisVertical,
  Star,
} from 'lucide-react';
import {
  RoundedPlainIconSM,
  RatingOffIconSM,
  RatingOnIconSM,
  RemoveIconSM,
} from 'components/HOCs/icon.hoc';

export const CheckIcon = RoundedPlainIconSM(Check);
export const ChevronRightIcon = RoundedPlainIconSM(ChevronRight);
export const ChevronLeftIcon = RoundedPlainIconSM(ChevronLeft);
export const ChevronUpIcon = RoundedPlainIconSM(ChevronUp);
export const ChevronDownIcon = RoundedPlainIconSM(ChevronDown);
export const DotIcon = RoundedPlainIconSM(Dot);
export const DotsHorizontalIcon = RoundedPlainIconSM(Ellipsis);
export const DotsVerticalIcon = RoundedPlainIconSM(EllipsisVertical);
export const SearchIcon = RoundedPlainIconSM(Search);
export const CloseIcon = RoundedPlainIconSM(X);

export const RatingOffIcon = RatingOffIconSM(Star);
export const RatingOnIcon = RatingOnIconSM(Star);
export const RemoveIcon = RemoveIconSM(X);
export const CircleRemoveIcon = RemoveIconSM(CircleX);
