CREATE TABLE public.testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 80),
  service text CHECK (service IS NULL OR char_length(service) <= 60),
  message text NOT NULL CHECK (char_length(message) BETWEEN 10 AND 1000),
  approved boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.testimonials TO anon, authenticated;
GRANT ALL ON public.testimonials TO service_role;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read approved testimonials" ON public.testimonials FOR SELECT TO anon, authenticated USING (approved = true);
CREATE POLICY "Anyone can submit a testimonial for review" ON public.testimonials FOR INSERT TO anon, authenticated WITH CHECK (approved = false);