<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\MailMessage;
use App\Models\News;

class NewNewsNotification extends Notification
{
    use Queueable;

    protected $news;

    public function __construct(News $news)
    {
        $this->news = $news;
    }

    public function via($notifiable)
    {
        return ['mail', 'database'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('Berita Baru: ' . $this->news->title)
            ->line('Ada berita baru: ' . $this->news->title)
            ->action('Baca Sekarang', url('/news/' . $this->news->id))
            ->line('Terima kasih sudah menggunakan GenuineNews!');
    }

    public function toArray($notifiable)
    {
        return [
            'news_id' => $this->news->id,
            'title' => $this->news->title,
            'message' => 'Berita baru tersedia.',
        ];
    }
}
