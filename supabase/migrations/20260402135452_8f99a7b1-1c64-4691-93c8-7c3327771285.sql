
-- Create judges table
CREATE TABLE public.judges (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  affiliation TEXT NOT NULL,
  bio_sentence TEXT NOT NULL,
  headshot_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.judges ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Judges are publicly readable"
  ON public.judges FOR SELECT
  USING (true);

-- Create headshots storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('headshots', 'headshots', true);

-- Public read access for headshots
CREATE POLICY "Headshots are publicly accessible"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'headshots');

-- Authenticated users can upload headshots
CREATE POLICY "Authenticated users can upload headshots"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'headshots' AND auth.role() = 'authenticated');
