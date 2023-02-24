import { useState } from "react";

import useProperties from "@hooks/useProperties";

import SearchBox from "@components/SearchBox/SearchBox";
import Properties from "@components/Properties/Properties";

const WelcomePage = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [data, loading, error] = useProperties(searchTerm);

  return (
    <>
      <SearchBox setSearchTerm={setSearchTerm} />
      {loading && <p>Loading properties ...</p>}
      {error && data?.error && <p>{error}</p>}
      {!error && data?.lrProperty && (
        <Properties data={data} searchTerm={searchTerm} />
      )}
    </>
  );
};

export default WelcomePage;
