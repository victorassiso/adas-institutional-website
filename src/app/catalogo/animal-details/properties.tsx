interface PropertiesProps {
  size: 'small' | 'medium' | 'big'
  sex: 'male' | 'female'
  weight: number
}

const translator = {
  small: 'Pequeno',
  medium: 'Médio',
  big: 'Grande',
  male: 'Macho',
  female: 'Fêmea',
}
export function Properties({ size, sex, weight }: PropertiesProps) {
  return (
    <div className="h flex gap-4">
      <div className="flex w-24 flex-col items-center justify-center gap-2 rounded-3xl border p-4">
        <span className="text-lg font-bold">{translator[size]}</span>
        <span className="text-sm text-muted-foreground">Porte</span>
      </div>

      <div className="flex  w-24 flex-col items-center justify-center gap-2 rounded-3xl border p-4">
        <span className="text-lg font-bold">{translator[sex]}</span>
        <span className="text-sm text-muted-foreground">Sexo</span>
      </div>

      <div className="flex w-24 flex-col items-center justify-center gap-2 rounded-3xl border p-4">
        <span className="text-lg font-bold">{weight}kg</span>
        <span className="text-sm text-muted-foreground">Peso</span>
      </div>
    </div>
  )
}
