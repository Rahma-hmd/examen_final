import { getSession } from 'auth-astro/server';

export async function onRequest(context: any, next: any) {
 
  if (context.url.pathname.startsWith('/api/auth/') || context.url.pathname === '/login') {
    return next();
  }

  try {
    const session = await getSession(context.request);

    
    if (!session) {
      return context.redirect('/login');
    }

    // Sinon, on laisse passer
    return next();
  } catch (error) {
    return context.redirect('/login');
  }
}