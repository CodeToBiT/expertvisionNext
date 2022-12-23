import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";

const countryDetail = () => {
  const router = useRouter();
  const countryDetail = router.query.blogDetail;
  const [countries, setCountries] = useState();
  const fetchCountries = async () => {
    const response = await fetch(
      [`https://admin.evc.edu.np/api/`, `country/${countryDetail}`].join(""),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();

    setCountries(json.data);
  };

  useEffect(() => {
    fetchCountries();
  });

  console.log(countries && countries.name)

  return <></>;
};

export default countryDetail;
