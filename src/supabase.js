import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ydqmsdvqwqfgbsibvreg.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkcW1zZHZxd3FmZ2JzaWJ2cmVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU1NzU3MzIsImV4cCI6MTk3MTE1MTczMn0.a60wEVAyTdH4cddEb9YmpJciqlnieXVLISry38o0IQc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
