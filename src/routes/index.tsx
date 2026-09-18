import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center space-y-4 max-w-md">
        <h1 className="text-4xl font-bold text-foreground">Projeto Pronto!</h1>
        <p className="text-lg text-muted-foreground">A estrutura base (Vite + React + Tailwind + shadcn/ui) foi iniciada. O que você gostaria de criar agora?</p>
      </div>
    </div>
  )
}
