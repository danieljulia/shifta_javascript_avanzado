# Vue 3 + Supabase — Lista de tareas

**¿Qué es Supabase?** Una base de datos PostgreSQL "como servicio", alternativa
open source a Firebase. Te da una API REST automática sobre tus tablas, de modo
que puedes leer y escribir datos desde el navegador sin programar un backend.
La librería `supabase-js` es el cliente oficial para JavaScript.

## Puesta en marcha

### 1. Crear el proyecto en Supabase

1. Entra en https://supabase.com y crea una cuenta (gratis).
2. Crea un proyecto nuevo (New project) y elige una contraseña para la base de
   datos. La región no importa para la demo.
3. Espera un par de minutos a que el proyecto se active.

### 2. Crear la tabla `tareas`

En el panel lateral ve a **SQL Editor**, pega este SQL y ejecútalo:

```sql
create table tareas (
  id bigint generated always as identity primary key,
  texto text not null,
  completada boolean not null default false,
  created_at timestamptz not null default now()
);
```

### 3. Row Level Security (RLS) para la demo

Por defecto, las tablas nuevas tienen **RLS activado** y ninguna política, así
que el navegador no puede leer ni escribir nada. Para la demo en clase tienes
dos opciones:

**Opción A (más rápida): desactivar RLS del todo**

```sql
alter table tareas disable row level security;
```

**Opción B (más correcta): dejar RLS activado con una política permisiva**

```sql
create policy "demo: permitir todo a todo el mundo"
on tareas
for all
to anon
using (true)
with check (true);
```

⚠️ **Ambas opciones son SOLO para clase**: cualquiera con la URL y la anon key
puede leer, modificar y borrar todas las filas. En un proyecto real, RLS debe
estar activado con políticas que limiten cada fila a su usuario autenticado.

### 4. Configurar las credenciales

1. En el panel de Supabase: **Project Settings → API**. Copia:
   - `Project URL`
   - `anon public` key
2. Copia la plantilla de configuración y rellénala:

```bash
cp config.example.js config.js
```

`config.js` está en `.gitignore` para no subir las credenciales al repo.

### 5. Servir el ejemplo en local

No abras `index.html` con doble clic (`file://`): las peticiones y la carga de
`config.js` pueden dar problemas de CORS. Usa un servidor local, por ejemplo:

```bash
npx serve .
# o
npx http-server -p 8080
```

y abre la URL que te indique (normalmente http://localhost:3000 o :8080).

## Aviso de seguridad

La **anon key** es pública por diseño (viaja en el navegador), pero su poder lo
limita RLS. Con RLS desactivado (o con la política permisiva de arriba), la anon
key equivale a acceso total a la tabla: úsala **solo en demos y con datos de
prueba**, y borra el proyecto de Supabase al terminar la clase si ya no lo
necesitas.

## Archivos

- `index.html` — la app completa (Vue 3 por CDN, sin build).
- `config.example.js` — plantilla de credenciales (sí se sube a GitHub).
- `config.js` — tus credenciales reales (ignorado por `.gitignore`).
