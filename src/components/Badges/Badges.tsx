import React from "react";
import "./styles.css";
interface Props {
	name: string;
	classname: string;
}
const Badges: React.FC<Props> = ({ name, classname }: Props) => {
	return (
		<span className={`chip chip-avatar ${classname}`}>
			<label>#{name}</label>
		</span>
	);
};

export default Badges;
