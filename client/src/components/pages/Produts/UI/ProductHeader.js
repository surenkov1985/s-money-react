import React, { memo } from "react";
import { ProductHead } from "../style";

export const ProductHeader = memo(({ children }) => {
	return <ProductHead>{children}</ProductHead>;
});
