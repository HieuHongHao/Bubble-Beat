import { Card, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { SearchBarProps } from "@/types/search";



export default function SearchBar({
  backgroundColor,
  placeHolder,
  placeHolderColor,
  handler,
}: SearchBarProps) {
  return (
    <Card m="10px" ml="20px" borderRadius={"10px"}>
      <InputGroup>
        <InputLeftElement
          // eslint-disable-next-line react/no-children-prop
          children={<SearchIcon />}
          pointerEvents="none"
          mt="5px"
        />
        <Input
          placeholder={placeHolder}
          bg={backgroundColor}
          w="500px"
          h="50px"
          variant="outline"
          _placeholder={{
            color: placeHolderColor,
          }}
          onChange={handler}
        />
      </InputGroup>
    </Card>
  );
}
