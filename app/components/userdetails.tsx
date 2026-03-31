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
      <h2>{`Welcome ${name}`}</h2>
    </div>
  );
};

export default DisplayUserDetails;