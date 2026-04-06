type DisplayUserDetailsProps = {
  name: string;
  capitalizer?: (str: string) => string;
};

const DisplayUserDetails = ({
  name,
  capitalizer,
}: DisplayUserDetailsProps) => {
  return (
    <div>
      {`Welcome ${name}`}
    </div>
  );
};

export default DisplayUserDetails;