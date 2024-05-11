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
import { IconSM } from 'components/HOCs/icon.hoc';

export const CheckIcon = IconSM(Check);
export const ChevronRightIcon = IconSM(ChevronRight);
export const ChevronLeftIcon = IconSM(ChevronLeft);
export const ChevronUpIcon = IconSM(ChevronUp);
export const ChevronDownIcon = IconSM(ChevronDown);
export const DotIcon = IconSM(Dot);
export const DotsHorizontalIcon = IconSM(Ellipsis);
export const DotsVerticalIcon = IconSM(EllipsisVertical);
export const SearchIcon = IconSM(Search);
export const CloseIcon = IconSM(X);

export const RatingOffIcon = IconSM(Star, 'ratingOff');
export const RatingOnIcon = IconSM(Star, 'ratingOn');
export const RemoveIcon = IconSM(X, 'remove');
export const CircleRemoveIcon = IconSM(CircleX, 'remove');
