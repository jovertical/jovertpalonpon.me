<?php

declare(strict_types=1);

class ExampleTest extends TestCase
{
    /** @test */
    public function example()
    {
        $this->get('/');

        $this->assertEquals(
            $this->app->version(),
            $this->response->getContent()
        );
    }
}
