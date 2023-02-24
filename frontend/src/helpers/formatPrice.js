const formatPrice = (value) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GBP",
  });

  return formatter.format(value);
};

export default formatPrice;
