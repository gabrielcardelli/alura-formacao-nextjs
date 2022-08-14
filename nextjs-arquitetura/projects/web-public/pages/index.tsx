import {sum} from "@alura/utils/math/sum"
import {Text} from "@alura/design-system/components/Text"

export default function HomeScreen() {
  return (
    <div>
        <Text tag="h1">Home</Text>
        <p>Importando modulo local: @alura/sum (sum2,2) = {sum(2,2)}</p>
    </div>
  );
}
