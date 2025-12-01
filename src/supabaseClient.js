import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lavwqzznkdhkdbznvrwt.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxhdndxenpua2Roa2Riem52cnd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2MDYxMzQsImV4cCI6MjA4MDE4MjEzNH0.4b9EAW0wEJmX87ElwzDOsHvniqVFtAuqBHjp06K_0v4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)