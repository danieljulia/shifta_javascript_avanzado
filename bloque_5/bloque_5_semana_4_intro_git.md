# Curso Acelerado de Git

Aprende los conceptos esenciales de **Git** 


## **0. Instalación**


https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Instalaci%c3%b3n-de-Git




------------------------------------------------------------------------

## **1. Conceptos clave**

  -----------------------------------------------------------------------
  Concepto                                  Qué es
  ----------------------------------------- -----------------------------
  **Git**                                   Un sistema de control de
                                            versiones. Guarda el
                                            historial de cambios de tu
                                            proyecto.

  **Repositorio (repo)**                    La carpeta del proyecto
                                            gestionada por Git.

  **Commit**                                Una "foto" del estado de tu
                                            código en un momento
                                            concreto.

  **Branch (rama)**                         Una línea de desarrollo
                                            independiente (para probar
                                            cambios sin afectar la
                                            principal).

  **Merge (fusión)**                        Combina los cambios de una
                                            rama con otra.

  **Remote (remoto)**                       Un repositorio alojado en un
                                            servidor (GitHub, GitLab...).

  **Clone / Pull / Push**                   Acciones para bajar o subir
                                            cambios entre tu equipo y el
                                            repositorio remoto.
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## **2. Inicio rápido**

### Inicializar un nuevo repositorio

``` bash
git init
```

### Añadir archivos al control de versiones

``` bash
git add .
```

(`.` = todos los archivos nuevos o modificados)

### Crear un commit (hacer una "foto")

``` bash
git commit -m "Mensaje del commit"
```

------------------------------------------------------------------------

## **3. Conectar con un repositorio remoto**

### Añadir el origen (ejemplo con GitHub)

``` bash
git remote add origin https://github.com/usuario/repositorio.git
```

### Subir el proyecto al remoto

``` bash
git push -u origin main
```

(o `master`, según cómo se llame la rama principal)

------------------------------------------------------------------------

## **4. Actualizar cambios**

### Descargar cambios del remoto

``` bash
git pull
```

### Subir tus cambios locales

``` bash
git push
```

------------------------------------------------------------------------

## **5. Trabajar con ramas**

### Crear una nueva rama

``` bash
git branch nueva-rama
```

### Cambiar de rama

``` bash
git checkout nueva-rama
```

### Crear y cambiar a la vez

``` bash
git checkout -b nueva-rama
```

### Fusionar una rama con `main`

``` bash
git checkout main
git merge nueva-rama
```

------------------------------------------------------------------------

## **6. Comandos útiles**

  ----------------------------------------------------------------------------------------
  Acción                          Comando
  ------------------------------- --------------------------------------------------------
  Ver el estado actual            `git status`

  Ver el historial                `git log`

  Deshacer el último commit (sin  `git reset --soft HEAD~1`
  perder los cambios)             

  Ignorar archivos (por ejemplo   crear archivo `.gitignore`
  `node_modules`)                 

  Clonar un repositorio existente `git clone https://github.com/usuario/repositorio.git`
  ----------------------------------------------------------------------------------------

------------------------------------------------------------------------

## **7. Flujo de trabajo típico (GitHub Flow)**

1.  `git pull` → para actualizar tu copia local.\
2.  `git checkout -b nueva-funcionalidad`\
3.  Realiza cambios y haz commits.\
4.  `git push origin nueva-funcionalidad`\
5.  Abre un **Pull Request** en GitHub para revisar y fusionar.

------------------------------------------------------------------------

## **8. Cuando hay conflictos**

Si Git no puede fusionar automáticamente, abrirá los archivos afectados
y mostrará marcas como estas:

    <<<<<<< HEAD
    tu código
    =======
    código de la otra rama
    >>>>>>> main

Edita el archivo para dejar solo la versión correcta y después:

``` bash
git add .
git commit
```

------------------------------------------------------------------------

## **9. Configuración básica**

``` bash
git config --global user.name "Tu nombre"
git config --global user.email "tu@correo.com"
git config --list
```

------------------------------------------------------------------------

## **10. Aprender más**

-   [Pro Git (libro gratuito)](https://git-scm.com/book/es/v2)\
-   [Try GitHub (tutorial interactivo)](https://try.github.io)\

------------------------------------------------------------------------

# ¿Necesito configurar claves SSH para hacer *push*?

**No siempre**, depende de cómo te conectes al repositorio remoto.\
Git permite dos formas principales de autenticación: **HTTPS** y
**SSH**.

-----------------------------------------------------------------------

## Usando **HTTPS** (sin claves SSH)

Es la forma más sencilla para empezar.

### Ejemplo

``` bash
git remote add origin https://github.com/usuario/repositorio.git
git push -u origin main
```

Cuando hagas el `git push`, Git te pedirá tus **credenciales de GitHub**
(usuario y *token personal*, no la contraseña).

> Desde 2021, GitHub ya **no permite contraseñas normales**, solo
> "*Personal Access Tokens*" (PAT).

### Cómo obtener un *Personal Access Token* (PAT)

1.  Ve a **GitHub → Settings → Developer settings → Personal access
    tokens → Tokens (classic)**.\
2.  Crea un nuevo token con permisos `repo` (para leer y escribir).\
3.  Copia el token y guárdalo (GitHub no te lo mostrará de nuevo).\
4.  La próxima vez que hagas `git push`, úsalo como **contraseña**.

### Ventajas

✅ Fácil de configurar.\
✅ No requiere claves SSH.

### Inconvenientes

❌ Tienes que introducir el token si no usas un gestor de credenciales.\
❌ Puede ser algo incómodo para uso frecuente.

------------------------------------------------------------------------

## Usando **SSH** (recomendado si trabajas con Git a menudo)

### Ejemplo

``` bash
git remote add origin git@github.com:usuario/repositorio.git
git push -u origin main
```

### Configuración paso a paso

1.  **Comprueba si ya tienes una clave SSH:**

    ``` bash
    ls ~/.ssh
    ```

    Si ves archivos como `id_rsa` o `id_ed25519`, ya tienes claves
    creadas.

2.  **Si no tienes, crea una nueva:**

    ``` bash
    ssh-keygen -t ed25519 -C "tu_email@ejemplo.com"
    ```

    (Pulsa Enter a todo; se guardará por defecto en
    `~/.ssh/id_ed25519`.)

3.  **Activa el agente SSH y añade la clave:**

    ``` bash
    eval "$(ssh-agent -s)"
    ssh-add ~/.ssh/id_ed25519
    ```

4.  **Copia tu clave pública y añádela a GitHub:**

    ``` bash
    cat ~/.ssh/id_ed25519.pub
    ```

    Copia el texto que aparece y pégalo en:\
    👉 GitHub → **Settings → SSH and GPG keys → New SSH key**

5.  **Prueba la conexión:**

    ``` bash
    ssh -T git@github.com
    ```

    Si todo está bien, verás un mensaje como:\
    `"Hi username! You’ve successfully authenticated."`

------------------------------------------------------------------------

### Ventajas del método SSH

✅ No necesitas introducir contraseñas ni tokens cada vez.\
✅ Más seguro y práctico para uso habitual.\
✅ Ideal para trabajar con varios repositorios o equipos.

------------------------------------------------------------------------
