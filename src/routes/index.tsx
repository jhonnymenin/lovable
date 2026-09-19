import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Quando você tiver a URL do Webhook (Zapier, Make, Google Script), me avise para colarmos aqui
      const WEBHOOK_URL = ''

      if (!WEBHOOK_URL) {
        // Simulação enquanto a URL não é colocada, para você testar a tela
        setTimeout(() => {
          setStatus('success')
          setFormData({ name: '', email: '', phone: '' })
        }, 1200)
        return
      }

      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.name,
          email: formData.email,
          telefone: formData.phone,
          dataCadastro: new Date().toISOString()
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md bg-card border border-border rounded-xl shadow-sm p-6 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Simpósio CITA</h1>
          <p className="text-muted-foreground">Inscrições abertas. Preencha seus dados para realizar sua inscrição.</p>
        </div>

        {status === 'success' ? (
          <div className="bg-green-500/10 text-green-600 p-6 rounded-lg text-center border border-green-500/20">
            <p className="font-medium text-lg">Cadastro recebido!</p>
            <p className="text-sm opacity-90 mt-1">Seus dados foram enviados com sucesso.</p>
            <button
              onClick={() => setStatus('idle')}
              className="block mx-auto mt-6 text-sm underline hover:text-green-700 focus:outline-none"
            >
              Cadastrar novo lead
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-sm font-medium text-foreground">Nome Completo</label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Ex: Maria Silva"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-medium text-foreground">E-mail</label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="maria@exemplo.com"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="phone" className="text-sm font-medium text-foreground">Telefone</label>
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="(11) 99999-9999"
              />
            </div>

            {status === 'error' && (
              <p className="text-sm text-destructive font-medium text-center">Erro ao enviar cadastro. Tente novamente.</p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex w-full items-center justify-center rounded-md bg-primary h-10 px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 mt-4"
            >
              {status === 'loading' ? 'Enviando...' : 'Quero me cadastrar'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
