type Props = {
  title: string,
  info?: string
}

export const ProfileInfo: React.FC<Props> = ({
  title,
  info
}) => {
  if (!info) {
    return null;
  }

  return (
    <p className="font-semibold">
      <span className="text-grey-500 mr-2">{title}</span>
      {info}
    </p>
  );
}