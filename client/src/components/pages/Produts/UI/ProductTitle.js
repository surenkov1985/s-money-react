import React, { memo } from "react";
import { FormTitle } from "../../AddProduct/style";

export const ProductTitle = memo(({ title }) => {
	return <FormTitle>{title}</FormTitle>;
});
