import { AvatarText, Badge, Text } from '..';

interface Props {
  avatarSrc: string;
  avatarAlt?: string;
  username: string;
  time: string;
  content: string;
  isMine?: boolean;
  isAuthor?: boolean;
  isLiked?: boolean;
  numOfLikes: number;
}

export function Comment({
  avatarSrc,
  avatarAlt = '',
  username,
  time,
  content,
  isMine,
  isAuthor,
  isLiked,
  numOfLikes = 0,
}: Props) {
  isLiked;

  return (
    <div className="flex flex-col gap-3 w-[720px] overflow-hidden break-words">
      <div className="flex flex-row items-start gap-3">
        <AvatarText src={avatarSrc} alt={avatarAlt} mainText={username} subText={time} />
        {isAuthor && <Badge color="outline" text="작성자" />}
        {isMine && <Badge color="outline" text="내댓글" />} {/* TODO: 뱃지 사이 간격 gap-2로 줄 방법? */}
      </div>
      <Text size="body2" text={content} />
      <div className="flex flex-row items-center gap-4">
        <Text text={`좋아요 ${numOfLikes}`} size="body2" color="secondary" />
        <Text text="답글달기" size="body2" color="secondary" />
        <Text text="수정하기" size="body2" color="secondary" />
      </div>
    </div>
  );
}